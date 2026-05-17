import { Link, Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import type { QueryClient } from '@tanstack/react-query';
import { IconLogout } from '@tabler/icons-react';
import { Wordmark } from '@/components/brand/wordmark';
import { OfflineBadge } from '@/components/ui/offline-badge';
import { Button } from '@/components/ui/button';
import { Page } from '@/components/ui/page';
import { useAuth } from '@/lib/auth';

type RouterContext = {
  queryClient: QueryClient;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: () => (
    <Page width="narrow" className="flex flex-col gap-5">
      <h1 className="text-display-lg text-foreground">Hindi mahanap ang pahina</h1>
      <p className="text-body-md text-muted-foreground">We couldn&rsquo;t find that page.</p>
      <Button asChild size="md" className="self-start">
        <Link to="/">Bumalik sa dashboard</Link>
      </Button>
    </Page>
  ),
});

function RootLayout() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="min-h-dvh bg-bg text-foreground">
      <header className="sticky top-0 z-20 border-b border-border bg-surface/95 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-5 py-3 sm:px-6">
          <Link to="/" aria-label="Bagyo Rescue" className="flex items-center">
            <Wordmark />
          </Link>
          <div className="flex items-center gap-2">
            <OfflineBadge />
            {isAuthenticated ? (
              <span className="flex items-center gap-2">
                <span className="hidden max-w-28 truncate text-label-md text-muted-foreground sm:inline">
                  {user?.username}
                </span>
                <Button
                  size="icon"
                  variant="ghost"
                  type="button"
                  aria-label="Sign out"
                  onClick={() => void logout()}
                >
                  <IconLogout className="size-4" aria-hidden="true" />
                </Button>
              </span>
            ) : null}
          </div>
        </div>
      </header>
      <Outlet />
    </div>
  );
}
