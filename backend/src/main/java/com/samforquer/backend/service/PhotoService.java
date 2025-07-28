package com.samforquer.backend.service;



import com.samforquer.backend.model.Photo;
import com.samforquer.backend.repository.PhotoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PhotoService {

    private final PhotoRepository photoRepository;

    public PhotoService(PhotoRepository photoRepository) {
        this.photoRepository = photoRepository;
    }

    public List<Photo> getAllPhotos() {
        return photoRepository.findAll();
    }

    public Photo addPhoto(Photo photo) {
        return photoRepository.save(photo);
    }
}
