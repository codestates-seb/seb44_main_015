package main.bookmark.service;

import lombok.RequiredArgsConstructor;
import main.bookmark.entity.Bookmark;
import main.bookmark.repository.BookmarkRepository;
import main.exception.BusinessLogicException;
import main.exception.ExceptionCode;
import main.notice.entity.Notice;
import main.notice.service.NoticeService;
import main.noticeTag.entity.NoticeTag;
import main.tag.entity.Tag;
import main.user.entity.User;
import main.user.repository.UserRepository;
import main.user.service.UserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
@Transactional
@Service
@RequiredArgsConstructor
public class BookmarkService {
    private final UserService userService;
    private final NoticeService noticeService;
    private final BookmarkRepository bookmarkRepository;

    public Bookmark createBookmark(Long userId, Long noticeId){
        verifyExistBookmark(userId,noticeId);
        User user = userService.findUser(userId);
        Notice notice = noticeService.findNotice(noticeId);
        Bookmark bookmark = new Bookmark();
        bookmark.setUser(user);
        bookmark.setNotice(notice);
        return bookmarkRepository.save(bookmark);
    }

    public List<Bookmark> findBookmarks(Long userId){
        return bookmarkRepository.findAllByUserUserId(userId);
    }

    private void verifyExistBookmark(Long userId, Long noticeId) {
        Optional<Bookmark> bookmark = bookmarkRepository.findByUserUserIdAndNoticeNoticeId(userId, noticeId);
        if(bookmark.isPresent()){
            throw new BusinessLogicException(ExceptionCode.BOOKMARK_EXISTS);
        }
    }
}
