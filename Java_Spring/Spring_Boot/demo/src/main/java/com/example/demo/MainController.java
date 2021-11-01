package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping(path="/")
public class MainController {
    @Autowired
    private TodoListRepository todoListRepository;

    @PostMapping(path = "/add")
    public @ResponseBody String addNewTodoList (@RequestBody TodoList t) {
        todoListRepository.save(t);
        return t.getTime() + " " +  t.getContent() + " Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<TodoList> getAllTodoList() {
        return todoListRepository.findAll();
    }
}
