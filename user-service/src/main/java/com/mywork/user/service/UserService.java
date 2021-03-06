package com.mywork.user.service;


import com.github.pagehelper.Page;
import com.mywork.user.common.PageResult;
import com.mywork.user.pojo.User;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;


import java.util.List;
import java.util.Map;

//@Repository
//@Service
public interface UserService {


    Page<User> getExpert(Map searchMap);

    @ResponseBody
    User queryById(@RequestBody Integer userId);
    List<User> findAll();
    public Boolean add(User User);
    public User findById(Integer id);
    public Boolean update(User User);
    public Boolean del(List<Integer> ids);

}
