import {AppRoutes} from "./appRoutes"

export const items = [
    { to: AppRoutes.postsPage, icon: '📝', label: 'Все посты' },
    { to: AppRoutes.createPostPage, icon: '➕', label: 'Создать пост' },
    { to: AppRoutes.myPostsPage, icon: '👤', label: 'Мои посты' },
    { to: AppRoutes.deletedPostsPage, icon: '🗑️', label: 'Удаленные посты' },
    { to: AppRoutes.testViewPage, icon: null, label: 'Тестовый экран' },
]
