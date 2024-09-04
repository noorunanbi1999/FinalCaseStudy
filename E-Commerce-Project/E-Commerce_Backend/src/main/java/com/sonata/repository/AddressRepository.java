package com.sonata.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sonata.modal.Address;

public interface AddressRepository extends JpaRepository<Address, Long> {

}
