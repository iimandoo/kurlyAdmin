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
    ├── App.tsx                     # ReactQuery Provider 설정
    ├── AppRouter.tsx               # ReactRouter 라우팅 설정
    ├── firebaseRoot.tsx            # Firebase 기본 설정
    ├── index.css                   # 공통 css
    ├── index.tsx                   # MUI 설정
    ├── theme.tsx                   # MUI 커스텀 테마
    └── ...
