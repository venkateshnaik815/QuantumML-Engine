package com.quantumml.core.controller;

import com.quantumml.core.model.Project;
import com.quantumml.core.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    private ProjectRepository projectRepository;

    @GetMapping("/workspace/{workspaceId}")
    public List<Project> getProjectsByWorkspace(@PathVariable Long workspaceId) {
        return projectRepository.findByWorkspaceId(workspaceId);
    }
}
