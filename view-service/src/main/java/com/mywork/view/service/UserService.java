package com.mywork.view.service;


import com.mywork.view.common.PageResult;
import com.mywork.view.pojo.User;
import com.mywork.view.common.Result;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

//@Repository
//@Service
public interface UserService {

    PageResult getExpert(Map searchMap);

    Result queryById(@RequestBody Integer userId);

    Result findById(@RequestBody Integer userid);

    @ResponseBody
    Result findAll();

    Result add(User user);

    Result update(User user);

    Result del(List<Integer> ids);
}
