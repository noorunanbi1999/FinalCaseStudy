package com.sonata.service;

import java.util.List;

import com.sonata.exception.ProductException;
import com.sonata.modal.Review;
import com.sonata.modal.User;
import com.sonata.request.ReviewRequest;

public interface ReviewService {

	public Review createReview(ReviewRequest req,User user) throws ProductException;
	
	public List<Review> getAllReview(Long productId);
	
	
}
