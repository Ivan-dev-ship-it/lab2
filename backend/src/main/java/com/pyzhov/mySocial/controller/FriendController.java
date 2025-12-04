package com.pyzhov.mySocial.controller;

import com.pyzhov.mySocial.dto.FriendDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/friends")
public class FriendController {
    
    private final List<FriendDTO> friends = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);
    
    public FriendController() {
        initializePredefinedData();
    }
    
    private void initializePredefinedData() {
        friends.add(new FriendDTO("c825", "Fdsds", "Fdsds", "3", "2", 
            "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg"));
        friends.add(new FriendDTO("f242", "Fds", "Fds", "1", "1", 
            "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg"));
        friends.add(new FriendDTO("fdf2", "Егор", "Пыжов", "1", "2", 
            "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg"));
        friends.add(new FriendDTO("09e7", "Egor", "Pyzhov", "1", "2", 
            "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg"));
        friends.add(new FriendDTO("7a85", "Егор", "Пыжов", "1", "2", 
            "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg"));
    }
    
    @GetMapping
    public List<FriendDTO> getAllFriends() {
        return new ArrayList<>(friends);
    }
    
    @GetMapping("/{id}")
    public FriendDTO getFriendById(@PathVariable String id) {
        return friends.stream()
                .filter(friend -> friend.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Friend not found"));
    }
    
    @PostMapping
    public FriendDTO createFriend(@RequestBody FriendDTO friendDTO) {
        friendDTO.setId(String.valueOf(counter.getAndIncrement()));
        friends.add(friendDTO);
        return friendDTO;
    }
    
    @PutMapping("/{id}")
    public FriendDTO updateFriend(@PathVariable String id, @RequestBody FriendDTO friendDTO) {
        FriendDTO existingFriend = getFriendById(id);
        existingFriend.setFirstName(friendDTO.getFirstName());
        existingFriend.setLastName(friendDTO.getLastName());
        existingFriend.setCountryId(friendDTO.getCountryId());
        existingFriend.setGroupId(friendDTO.getGroupId());
        existingFriend.setAvatar(friendDTO.getAvatar());
        return existingFriend;
    }
    
    @DeleteMapping("/{id}")
    public void deleteFriend(@PathVariable String id) {
        FriendDTO friend = getFriendById(id);
        friends.remove(friend);
    }
}
