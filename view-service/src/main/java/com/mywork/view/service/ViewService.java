package com.mywork.view.service;


import com.github.pagehelper.Page;
import com.mywork.view.common.Result;
import com.mywork.view.pojo.User;
import org.springframework.web.bind.annotation.RequestBody;


import java.util.List;
import java.util.Map;

//@Repository
//@Service
public interface ViewService {


    Result updateUser(@RequestBody User user);

    Result addUser(@RequestBody User user);

    User test(@RequestBody Integer id);

    User getUserById(Integer id);

    List<User> getUser();
}
