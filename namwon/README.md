![header](https://capsule-render.vercel.app/api?type=wave&color=auto&height=150&section=header&text=2024.%2011.%2005%20-%202024.%2011.%2011&fontSize=60)

# 🧑‍🍳 남원의 맛 공모전 (PC / MOBILE)
## '선호도 조사 하러가기' floating 오픈 및 마감 기능 구현

# <a href="https://xn--q20bm8okyktpa.com/"> 바로가기 </a>


### Reference:
```
선호도 조사 링크 전달드립니다.
https://forms.gle/xfVsehgBK1hFYRGQA
11월 12일 00:00 ~ 11월 14일 23:59까지 링크 연동되도록 부탁드리겠습니다.
```





# ⭐
#### 💭 PC / MOBILE 포함 <br>
#### 💭 floating 배너 수정 <br>
#### 💭 '선호도 조사 하러가기' 11월 12일 00:00 ~ 11월 14일 23:59까지 링크 연동되도록 기능 구현 <br>
```
  <AREA shape="rect" coords="0,442,129,535" title="선호도 조사 하러하기" id="surveyLink" href="#" target="_blank">

                <script>
                    // 링크를 사용할 기간 설정 (KST 기준)
                    const startDate = new Date("2024-11-12T00:00:00"); // 11월 12일 자정
                    const endDate = new Date("2024-11-14T18:00:00");   // 11월 14일 오후 6시
                    const currentDate = new Date();
                    const surveyLink = document.getElementById("surveyLink");

                    // 시간에 따라 링크 활성화/비활성화
                    if (currentDate >= startDate && currentDate <= endDate) {
                        surveyLink.href = "https://docs.google.com/forms/d/e/1FAIpQLSfxcF0lpb6etCnlEf1eyrH4KXAeFetuxp62brzYO0JQqZ-ugQ/viewform?pli=1";
                    } else {
                        surveyLink.removeAttribute("href");

                        // 시간 상태에 따라 알림창 메시지 설정
                        surveyLink.addEventListener("click", function(event) {
                            event.preventDefault(); // 클릭 시 링크로 이동하지 않도록 방지

                            if (currentDate < startDate) {
                                alert("11월 12일 자정부터 참여할 수 있습니다.");
                            } else {
                                alert("네이밍 선호도 조사가 종료되었습니다. 감사합니다.");
                            }
                        });
                    }
                </script>
```

## 🖥️ PC
![image](https://github.com/user-attachments/assets/a2332735-64b9-4854-9ca2-476222cecdda) <br>

## 📱 MOBILE
![image](https://github.com/user-attachments/assets/40c3fcc8-21fa-4d7e-9764-5713e0a5b5b2)









