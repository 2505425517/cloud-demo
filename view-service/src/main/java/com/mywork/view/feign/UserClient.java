package com.mywork.view.feign;


import com.mywork.view.pojo.User;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient("userservice" )
public interface UserClient {

//    @PostMapping("/user/find")
    @RequestMapping(value="/user/find",method=RequestMethod.POST,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    List<User> findall();

//    @PostMapping("/user/findById/{userId}")
    @RequestMapping(value="/user/findById/{userId}",method=RequestMethod.POST,produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    User findById( @RequestBody @PathVariable("userId") @RequestParam Integer userId);
}
