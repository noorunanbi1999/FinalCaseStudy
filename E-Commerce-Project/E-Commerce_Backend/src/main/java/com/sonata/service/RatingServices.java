package com.sonata.service;

import java.util.List;

import com.sonata.exception.ProductException;
import com.sonata.modal.Rating;
import com.sonata.modal.User;
import com.sonata.request.RatingRequest;

public interface RatingServices {
	
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	
	public List<Rating> getProductsRating(Long productId);

}
