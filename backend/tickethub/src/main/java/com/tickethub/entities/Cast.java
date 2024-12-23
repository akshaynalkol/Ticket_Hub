package com.tickethub.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "casts")
@Getter
@Setter
@ToString(callSuper = true)
public class Cast extends BaseEntity {
//	@Column(length = 25)
	private String name;
	private String profile_path;

//	@ManyToOne
//	@JoinColumn(name = "movieCast_id")
//	private MovieCast movieCast;

	private long castId;
}