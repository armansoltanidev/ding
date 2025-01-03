import { auth } from "@repo/auth/server";
import { database } from "@repo/database";
import { env } from "@repo/env";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { AvatarStack } from "./components/avatar-stack";
import { Cursors } from "./components/cursors";
import { Header } from "./components/header";
import {
  DebitCard,
  DebitCardContent,
  DebitCardFooter,
  DebitCardHeader,
  DebitCardTitle,
} from "@repo/design-system/components/ui/debit-card";
import { Button } from "@repo/design-system/components/ui/button";
import { ArrowLeftIcon, RefreshCcw } from "lucide-react";
const title = "Acme Inc";
const description = "My application.";

const CollaborationProvider = dynamic(() =>
  import("./components/collaboration-provider").then(
    (mod) => mod.CollaborationProvider
  )
);

export const metadata: Metadata = {
  title,
  description,
};

const App = async () => {
  // const pages = await database.page.findMany();
  const { orgId } = await auth();

  if (!orgId) {
    notFound();
  }

  return (
    <>
      <Header pages={["Building Your Application"]} page="Data Fetching">
        {env.LIVEBLOCKS_SECRET && (
          <CollaborationProvider orgId={orgId}>
            <AvatarStack />
            <Cursors />
          </CollaborationProvider>
        )}
      </Header>
      <main className="m-3 flex flex-col gap-2">
        <DebitCard>
          <DebitCardHeader>
            <p className="text-muted">دینگ کارت</p>
            <div className="text-xs text-muted">احراز هویت</div>
          </DebitCardHeader>
          <DebitCardTitle>
            <span className="text-sm text-muted">موجودی شما:</span>{" "}
            <span className="text-4xl font-semibold text-muted">
              ۱۴,۵۱۴,۱۵۴
            </span>
          </DebitCardTitle>
          <DebitCardFooter>
            <Button
              effect="expandIcon"
              icon={ArrowLeftIcon}
              iconPlacement="right"
              variant="secondary"
            >
              افزایش موجودی
            </Button>
            <div>
              <Button
                size="icon"
                className="text-muted"
                icon={RefreshCcw}
                iconPlacement="right"
                variant="ghost"
              ></Button>
            </div>
          </DebitCardFooter>
        </DebitCard>
        <div className="flex gap-x-2">
          <Button className="flex-1" size="lg" effect="gooeyLeft">
            ارســال شــارژ
          </Button>
          <Button
            className="flex-1"
            size="lg"
            variant="outline"
            effect="gooeyRight"
          >
            پیــگیری تــراکنش
          </Button>
        </div>
      </main>
    </>
  );
};

export default App;
