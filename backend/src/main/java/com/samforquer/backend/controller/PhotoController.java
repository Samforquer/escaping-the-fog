package com.samforquer.backend.controller;


import com.samforquer.backend.model.Photo;
import com.samforquer.backend.service.PhotoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/photos")
@CrossOrigin(origins = "http://localhost:5173") // Replace with your frontend port
public class PhotoController {

    private final PhotoService photoService;

    public PhotoController(PhotoService photoService) {
        this.photoService = photoService;
    }

    @GetMapping
    public List<Photo> getAllPhotos() {
        return photoService.getAllPhotos();
    }

    @PostMapping
    public Photo addPhoto(@RequestBody Photo photo) {
        return photoService.addPhoto(photo);
    }
}
