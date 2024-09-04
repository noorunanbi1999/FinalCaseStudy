package com.sonata.service;

import com.sonata.exception.UserException;
import com.sonata.modal.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserProfileByJwt(String jwt) throws UserException;

}
