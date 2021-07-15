#!/usr/bin/env Rscript

require(dplyr)
require(tsibble)
require(readr)
require(ggplot2)
require(prophet)



dat <- read_csv("bit.csv") %>%
   as_tsibble(., key = NULL, index = ds)
glimpse(dat, width = 60)

dat %>%
    ggplot(., aes(ds, y)) +
    geom_line() +
    theme_minimal()

    
train_df <- dat %>% 
    arrange(ds) %>% 
    slice(1:(n() - 10))

test_df <- dat %>% 
    arrange(ds) %>% 
    tail(19)
    
M0 <- prophet(train_df)

future_df <- make_future_dataframe(M0, periods = 19)
forecast_M0 <- predict(M0, future_df)

forecast_M0 %>% 
  dplyr::select(yhat, yhat_lower, yhat_upper) %>% head()

head(forecast_M0[, c("yhat", "yhat_lower", "yhat_upper")])
plot(M0, forecast_M0)

prophet_plot_components(M0, forecast_M0)

write.csv(forecast_M0, file="prophet.csv", row.names=TRUE)
dev.off()



