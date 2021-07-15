#!/usr/bin/env Rscript
 
require(rvest)
require(dplyr)
require(lubridate)
require(ggplot2)
require(readr)
require(prophet)
require(tsibble)
require(bsts)

dat <- read_csv("bit.csv") %>%
   as_tsibble(., key = NULL, index = ds)
glimpse(dat, width = 60)

dat %>%
    ggplot(., aes(ds, y)) +
    geom_line() +
    theme_minimal()

# обучающие данные
train_df <- dat %>% 
    arrange(ds) %>% 
    slice(1:(n() - 20))

# проверочная выборка
test_df <- dat %>% 
    arrange(ds) %>% 
    tail(19)
    
qwe <- rbind(mutate(train_df, dataset = "train"),
      mutate(test_df, dataset = "test")) %>% 
  ggplot(aes(ds, y, col = dataset)) +
  geom_line() + geom_point(alpha = 0.4) +
  theme_minimal() +
  scale_color_manual(values = c("blue", "black"))

plot(qwe)
  
  
y1 <- train_df$y
ds1 <- train_df$ds

ss <- list()
ss <- AddLocalLinearTrend(ss, y1)
# ss <- AddSeasonal(ss, y1, nseasons = 7)

M0 <- bsts(y1, ss,
            timestamps = ds1, 
            niter = 730, ping = 0, seed = 42)


M0_pred <- predict(M0, horizon = 109)
plot(M0_pred)


summary(M0_pred)
M0_pred


M0_pred <- predict(M0, horizon = 39) %>% .$median

write.csv(M0_pred, file="bs.csv", row.names=TRUE)
plot(M0_pred)
