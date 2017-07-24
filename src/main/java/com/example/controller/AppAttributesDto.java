package com.example.controller;

/**
 * Created by amarpandav on 23/07/17.
 */
public class AppAttributesDto {

  private String activeProfile;
  private String componentVersion;

  //required by JSON
  public AppAttributesDto(){}

  public AppAttributesDto(String activeProfile, String componentVersion) {
    this.activeProfile = activeProfile;
    this.componentVersion = componentVersion;
  }

  public String getActiveProfile() {
    return activeProfile;
  }

  public String getComponentVersion() {
    return componentVersion;
  }
}
