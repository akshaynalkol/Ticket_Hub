package com.tickethub.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString(callSuper = true, exclude = { "booking" })
public class Payment extends BaseEntity {
	private double amount;
	private LocalDate paymentDate;
	@Column(length = 25)
	private String paymentMethod;
	@Column(length = 25)
	private String paymentStatus;

	@OneToOne
	@JoinColumn(name = "bookingId")
	private Booking booking;
}