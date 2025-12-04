package com.pyzhov.mySocial.dto;

import java.util.List;

public class PostDTO {
    private String id;
    private String username;
    private String avatar;
    private String timeAgo;
    private String text;
    private String image;
    private int likes;
    private List<CommentDTO> comments;

    public PostDTO() {}

    public PostDTO(String id, String username, String avatar, String timeAgo, String text, String image, int likes, List<CommentDTO> comments) {
        this.id = id;
        this.username = username;
        this.avatar = avatar;
        this.timeAgo = timeAgo;
        this.text = text;
        this.image = image;
        this.likes = likes;
        this.comments = comments;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar;
    }

    public String getTimeAgo() {
        return timeAgo;
    }

    public void setTimeAgo(String timeAgo) {
        this.timeAgo = timeAgo;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public int getLikes() {
        return likes;
    }

    public void setLikes(int likes) {
        this.likes = likes;
    }

    public List<CommentDTO> getComments() {
        return comments;
    }

    public void setComments(List<CommentDTO> comments) {
        this.comments = comments;
    }
}
