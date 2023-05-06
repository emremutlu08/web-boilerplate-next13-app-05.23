// "use client";

import { getServerSession } from "next-auth";
import { getTranslations } from "next-intl/server";

import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons.component";
import LocaleSwitcher from "@/components/locale-switcher";
import PageLayout from "@/components/page-layout";
import ReduxCounter from "@/components/redux-counter";
import { User } from "@/components/user.component";

import { authOptions } from "../api/auth/[...nextauth]/route";

// import { useTranslations } from "next-intl";

export default async function Index() {
  const t = await getTranslations("Index");
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <PageLayout title={t("title")}>
      <p className="italic">{t("description")}</p>
      <LocaleSwitcher />
      <LoginButton />
      <RegisterButton />
      <LogoutButton />
      <ProfileButton />
      <User />
      <ReduxCounter />
    </PageLayout>
  );
}
