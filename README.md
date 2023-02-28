# KurlyAdmin clone project

## Tech Stack

- React
- ReactRouter
- ReactQuery
- ReactHookForm
- Typescript
- MaterialUI
- Firebase
- Cloudinary
- Redux

## Directory Structure

    ├── public/                     # static resources
    ├── src/                        # source directory
    |   ├── api/                    # firebase routing
    |   ├── components/             # component directory
    |   ├── models/                 # type definition
    |   └── pages/                  # 페이지 디렉토리
    |   |   ├── NotFound/           # notfound page
    |   |   ├── index.tsx/          # navbar, outlet 구조설정
    |   |   └── ...                 # 기타 페이지들
    |   └── store /                 # 리덕스 스토어
    |       └── modules/            # 리덕스 모듈
    ├── App.tsx                     # ReactQuery Provider 설정
    ├── AppRouter.tsx               # ReactRouter 라우팅 설정
    ├── firebaseRoot.tsx            # Firebase 기본 설정
    ├── index.css                   # 공통 css
    ├── index.tsx                   # MUI 설정
    ├── theme.tsx                   # MUI 커스텀 테마
    └── ...

## UI

|login|products list|product create|
|------|---|---|
|![c1](https://user-images.githubusercontent.com/77284671/221919062-7636e24f-dc9e-451d-b83d-44ee1d4daa86.png)|![c2](https://user-images.githubusercontent.com/77284671/221919208-53616bf1-1fd3-4c64-9cba-1d5448078cd0.png)|![c3](https://user-images.githubusercontent.com/77284671/221919243-eb5e5cc0-82f5-4c2f-bd8d-331b8fc211ed.png)



