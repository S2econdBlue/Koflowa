package com.d202.koflowa.talk.controller;

import com.d202.koflowa.common.response.Response;
import com.d202.koflowa.talk.dto.MessageDto;
import com.d202.koflowa.talk.dto.RoomDto;
import com.d202.koflowa.talk.service.MessageService;
import io.swagger.v3.oas.annotations.Operation;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/talk/message")
@RequiredArgsConstructor
public class MessageController {
    private final MessageService messageService;

    /* 메시지 송신 */
    @Operation(summary = "메시지 보내기", description = "채팅방에서 상대에게 메시지 보내는 api 입니다.")
    @PostMapping
    public Response sendChatMessage(@RequestBody MessageDto.Request messageDto) {
        return Response.success(messageService.createMessage(messageDto));
    }

    /* 채팅방의 메시지들을 조회 : 나중에 최적화 필요 DTO를 다시 만들던가 하기 : Spring Security로 ID값 받고 요청 SEQ값 조회 */
    @Operation(summary = "메시지 조회", description = "상대방과의 채팅방의 메시지들을 조회하는 api 입니다.")
    @PostMapping("/log")
    public Response getChatMessageList(@RequestBody RoomDto.Request roomDto) {
        return Response.success(messageService.getMessageList(roomDto));
    }

    /* 메시지 삭제 */
    @Operation(summary = "메시지 삭제", description = "메시지를 삭제하는 api 입니다.")
    @DeleteMapping
    public Response deleteMessage(@RequestBody MessageDto.Request messageDto) {
        return Response.success();
    }
}
