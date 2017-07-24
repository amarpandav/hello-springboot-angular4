package com.example.controller;

public class UserDto {
  private int id;
  private String name;
  private String gender;
  private String email;

  //required by JSON
  public UserDto(){}

  public UserDto(int id, String name, String gender, String email) {
    this.id = id;
    this.name = name;
    this.gender = gender;
    this.email = email;
  }

  public int getId() {
    return id;
  }

  public String getEmail() {
    return email;
  }

  public String getGender() {
    return gender;
  }

  public String getName() {
    return name;
  }
}
