package com.sonata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sonata.modal.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

}
