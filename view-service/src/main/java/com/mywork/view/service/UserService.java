package com.mywork.view.service;


import com.mywork.view.pojo.User;
import com.mywork.view.common.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

//@Repository
//@Service
public interface UserService {

    Result queryById(@RequestBody Integer userId);

    Result findById(@RequestBody Integer userid);

    @ResponseBody
    Result findAll();

    Result add(User user);

    Result update(User user);

    Result del(List<Integer> ids);
}
