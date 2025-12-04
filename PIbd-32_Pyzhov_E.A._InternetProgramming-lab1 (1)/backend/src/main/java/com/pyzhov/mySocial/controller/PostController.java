package com.pyzhov.mySocial.controller;

import com.pyzhov.mySocial.dto.CommentDTO;
import com.pyzhov.mySocial.dto.PostDTO;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.atomic.AtomicLong;

@RestController
@RequestMapping("/api/posts")
public class PostController {

    private final List<PostDTO> posts = new ArrayList<>();
    private final AtomicLong counter = new AtomicLong(3);

    public PostController() {
        initializePredefinedData();
    }

    private void initializePredefinedData() {
        List<CommentDTO> comments1 = new ArrayList<>();
        comments1.add(new CommentDTO(1, "Максим", "Согласен!"));
        comments1.add(new CommentDTO(2, "Анна", "Отличный пост!"));

        List<CommentDTO> comments2 = new ArrayList<>();
        comments2.add(new CommentDTO(1, "Петр", "Интересно"));

        posts.add(new PostDTO(
                "1",
                "Анна Иванова",
                "https://randomuser.me/api/portraits/men/88.jpg",
                "10 минут назад",
                "Привет! Отличный день 😊",
                "https://steamuserimages-a.akamaihd.net/ugc/1862807092239826419/3736E23F40592F58642E06A7DE162D781BA917C4/?imw=512&imh=288&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
                22,
                comments1
        ));

        posts.add(new PostDTO(
                "2",
                "Анна Иванова",
                "https://rgunh.ru/upload/iblock/f95/4u13l5rz8i82acyqmsuzyevclyzpcx0f/image-3.jpg",
                "10 минут назад",
                "Привет! Отличный день 😊",
                "https://m.media-amazon.com/images/I/51s772EccsL._SL1000_.jpg",
                16,
                comments2
        ));
    }

    @GetMapping
    public List<PostDTO> getAll() {
        return new ArrayList<>(posts);
    }

    @PatchMapping("/{id}")
    public PostDTO patch(@PathVariable String id, @RequestBody PostDTO body) {
        PostDTO existing = posts.stream()
                .filter(p -> p.getId().equals(id))
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Post not found"));

        if (body.getLikes() != 0 || existing.getLikes() == 0) {
            existing.setLikes(body.getLikes());
        }
        if (body.getComments() != null) {
            existing.setComments(body.getComments());
        }
        return existing;
    }
}
