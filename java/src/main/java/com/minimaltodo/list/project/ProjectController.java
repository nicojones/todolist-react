package com.minimaltodo.list.project;

import java.nio.file.AccessDeniedException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.minimaltodo.list.user.User;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    private final ProjectService service;

    @Autowired
    public ProjectController(ProjectService service) {
        this.service = service;
    }

    @RequestMapping(method = RequestMethod.GET, path = "")
    public ResponseEntity<List<Project>> getAllProjects() {
        return ResponseEntity.ok(service.getAllProjects());
    }

    @RequestMapping(method = RequestMethod.POST, path = "")
    public ResponseEntity<Project> addProject(
            @RequestBody Project project,
            @AuthenticationPrincipal User user) {

        return ResponseEntity.ok(service.saveProject(user, project));
    }
    
    @RequestMapping(method = RequestMethod.PUT, path = "")
    public ResponseEntity<Project> updateProject(
            @RequestBody Project project,
            @AuthenticationPrincipal User user) throws AccessDeniedException {

        project.setUsers(List.of(user));
        project.setTasks(List.of());

        return ResponseEntity.ok(service.updateProject(user, project));
    }
    
    @RequestMapping(method = RequestMethod.DELETE, path = "/{projectId}")
    public ResponseEntity<Long> deleteProject(
            @PathVariable("projectId") Long projectId,
            @AuthenticationPrincipal User user) throws AccessDeniedException {

        service.deleteProject(user, projectId);

        return ResponseEntity.ok(1L);
    }   

    @RequestMapping(method = RequestMethod.POST, path = "/{projectId}/join")
    public ResponseEntity<Long> joinProject(
            @PathVariable("projectId") Long projectId,
            @RequestParam("user") String newUserEmail,
            @AuthenticationPrincipal User user) throws AccessDeniedException {

        service.addUserToProject(user, projectId, newUserEmail);

        return ResponseEntity.ok(1L);
    }
}
