package com.quantumml.core.controller;

import com.quantumml.core.model.Workspace;
import com.quantumml.core.repository.WorkspaceRepository;
import com.quantumml.core.security.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/workspaces")
public class WorkspaceController {
    @Autowired
    private WorkspaceRepository workspaceRepository;

    @GetMapping
    public List<Workspace> getWorkspaces() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return workspaceRepository.findByOwnerId(userDetails.getId());
    }
}
