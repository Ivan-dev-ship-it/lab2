package com.pyzhov.mySocial.controller;

import com.pyzhov.mySocial.dto.UserDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserDTO user;

    public UserController() {
        this.user = new UserDTO(
                "1",
                "Егор",
                "Пыжов",
                "Описание Авывыпрофвывыля",
                "Россия",
                null
        );
    }

    @GetMapping("/1")
    public UserDTO getProfile() {
        return user;
    }

    @PatchMapping("/1")
    public UserDTO updateProfile(@RequestBody UserDTO patch) {
        if (patch.getFirstName() != null) user.setFirstName(patch.getFirstName());
        if (patch.getLastName() != null) user.setLastName(patch.getLastName());
        if (patch.getDescription() != null) user.setDescription(patch.getDescription());
        if (patch.getCountry() != null) user.setCountry(patch.getCountry());
        if (patch.getAvatar() != null) user.setAvatar(patch.getAvatar());
        return user;
    }
}
