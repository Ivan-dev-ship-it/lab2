package com.pyzhov.mySocial.controller;

import com.pyzhov.mySocial.dto.GroupDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/groups")
public class GroupController {
    
    private final List<GroupDTO> groups = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(1);
    
    public GroupController() {
        initializePredefinedData();
    }
    
    private void initializePredefinedData() {
        groups.add(new GroupDTO("1", "Друзья из школы"));
        groups.add(new GroupDTO("2", "Коллеги"));
        groups.add(new GroupDTO("3", "Семья"));
        groups.add(new GroupDTO("4", "Университет"));
        groups.add(new GroupDTO("5", "Спорт"));
    }
    
    @GetMapping
    public List<GroupDTO> getAllGroups() {
        return new ArrayList<>(groups);
    }
    
    @GetMapping("/{id}")
    public GroupDTO getGroupById(@PathVariable String id) {
        return groups.stream()
                .filter(group -> group.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Group not found"));
    }
    
    @PostMapping
    public GroupDTO createGroup(@RequestBody GroupDTO groupDTO) {
        groupDTO.setId(String.valueOf(counter.getAndIncrement()));
        groups.add(groupDTO);
        return groupDTO;
    }
    
    @PutMapping("/{id}")
    public GroupDTO updateGroup(@PathVariable String id, @RequestBody GroupDTO groupDTO) {
        GroupDTO existingGroup = getGroupById(id);
        existingGroup.setName(groupDTO.getName());
        return existingGroup;
    }
    
    @DeleteMapping("/{id}")
    public void deleteGroup(@PathVariable String id) {
        GroupDTO group = getGroupById(id);
        groups.remove(group);
    }
}
