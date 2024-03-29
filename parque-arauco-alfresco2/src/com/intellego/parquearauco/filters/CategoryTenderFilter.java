package com.intellego.parquearauco.filters;


import com.intellego.parquearauco.security.filters.NumericFilter;
import com.intellego.parquearauco.security.filters.ObjectFilter;

public class CategoryTenderFilter extends ObjectFilter {
	private static final long serialVersionUID = 1L;

	private NumericFilter id;
	private NumericFilter tender;
	private NumericFilter category;


	public  CategoryTenderFilter() {
		this.id = new NumericFilter();
		this.id.setField("id");

		this.tender = new NumericFilter();
		this.tender.setField("tender");

		this.category = new NumericFilter();
		this.category.setField("category");

	}


	public NumericFilter getId() {
		return id;
	}


	public void setId(NumericFilter id) {
		this.id = id;
	}


	public NumericFilter getTender() {
		return tender;
	}


	public void setTender(NumericFilter tender) {
		this.tender = tender;
	}


	public NumericFilter getCategory() {
		return category;
	}


	public void setCategory(NumericFilter category) {
		this.category = category;
	}


}
