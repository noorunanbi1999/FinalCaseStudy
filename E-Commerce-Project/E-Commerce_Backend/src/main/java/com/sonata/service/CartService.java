package com.sonata.service;

import com.sonata.exception.ProductException;
import com.sonata.modal.Cart;
import com.sonata.modal.CartItem;
import com.sonata.modal.User;
import com.sonata.request.AddItemRequest;

public interface CartService {
	
	public Cart createCart(User user);
	
	public String addCartItem(Long userId,AddItemRequest req) throws ProductException;
	
	public Cart findUserCart(Long userId);

}
