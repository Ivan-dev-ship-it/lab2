package com.pyzhov.mySocial.dto;

public class FriendDTO {
    private String id;
    private String firstName;
    private String lastName;
    private String countryId;
    private String groupId;
    private String avatar;
    
    public FriendDTO() {}
    
    public FriendDTO(String id, String firstName, String lastName, String countryId, String groupId, String avatar) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.countryId = countryId;
        this.groupId = groupId;
        this.avatar = avatar;
    }
    
    public String getId() {
        return id;
    }
    
    public void setId(String id) {
        this.id = id;
    }
    
    public String getFirstName() {
        return firstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    
    public String getLastName() {
        return lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    
    public String getCountryId() {
        return countryId;
    }
    
    public void setCountryId(String countryId) {
        this.countryId = countryId;
    }
    
    public String getGroupId() {
        return groupId;
    }
    
    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }
    
    public String getAvatar() {
        return avatar;
    }
    
    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }
}
