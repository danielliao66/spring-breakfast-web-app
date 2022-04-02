package com.danielliao.breakfastshop;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document("orders")
public class Order {

    @Id
    private String id;

    private final List<OrderedItem> orderedItems;
    private final String option;
    private int orderId;
    private boolean isReady;

    public Order(List<OrderedItem> orderedItems, String option) {
        this.orderedItems = orderedItems;
        this.option = option;
    }

    public List<OrderedItem> getOrderedItems() {
        return orderedItems;
    }

    public String getOption() {
        return option;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public boolean getIsReady() {
        return isReady;
    }

    public void setIsReady(boolean isReady) {
        this.isReady = isReady;
    }
}