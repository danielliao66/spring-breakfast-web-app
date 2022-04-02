package com.danielliao.breakfastshop;

public class OrderedItem {

    private final String name;
    private final int quantity;

    public OrderedItem(String name, int quantity) {
        this.name = name;
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public int getQuantity() {
        return quantity;
    }
}
