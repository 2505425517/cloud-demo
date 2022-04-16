package com.mywork.view.service;

import com.mywork.view.common.PageResult;
import com.mywork.view.common.Result;
import com.mywork.view.pojo.Message;

import java.util.List;
import java.util.Map;

public interface MessageService {


   PageResult search(Map searchMap);

   Result findAll();

   Result add(Message message);

   Result findByUserId(Integer userid);

   Result update(Message message);

   Result del(List<Integer> ids);
}
