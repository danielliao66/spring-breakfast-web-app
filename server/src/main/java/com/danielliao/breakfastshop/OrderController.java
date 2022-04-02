package com.danielliao.breakfastshop;

import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "https://spring-breakfast-app.vercel.app/")
@RestController
public class OrderController {

    private ItemRepository itemRepository;
    private OrderRepository orderRepository;
    private int orderId = 0;

    public OrderController(ItemRepository itemRepository, OrderRepository orderRepository) {
        this.itemRepository = itemRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping("/menu")
    public List<Item> getMenu() {
        return itemRepository.findAll();
    }

    @PostMapping("/order")
    public int makeOrder(@RequestBody Order order) {
        order.setOrderId(++orderId);
        order.setIsReady(false);
        orderRepository.save(order);
        return orderId;
    }

    @GetMapping("/orders")
    public List<Order> getOrders() {
        return orderRepository.findAll();
    }
}
