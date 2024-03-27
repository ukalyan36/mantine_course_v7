import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconGauge,
  IconLock,
  IconReport,
  IconMoneybag,
  IconCards,
  IconCashOff,
} from "@tabler/icons-react";
import { UserButton } from "../UserButton/UserButton";
import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
import classes from "./NavbarNested.module.css";

const menuData = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Investments",
    icon: IconMoneybag,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/" },
      { label: "Bank Balances", link: "bankbalances", icon: IconCards },
      { label: "Stocks", link: "/" },
      { label: "Others", link: "/" },
    ],
  },
  {
    label: "Expenses",
    icon: IconCashOff,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/" },
      { label: "Expenses", link: "/" },
      { label: "Recurring", link: "/" },
    ],
  },
  {
    label: "Credit Cards",
    icon: IconCards,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/" },
      { label: "Forecasts", link: "/" },
      { label: "My Cards", link: "/" },
    ],
  },

  //   { label: "Analytics", icon: IconPresentationAnalytics },
  { label: "Reports", icon: IconReport },
  {
    label: "Security",
    icon: IconLock,
  },
];

export function NavbarNested() {
  const links = menuData.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>

      <div className={classes.footer}>
        <UserButton />
      </div>
    </nav>
  );
}
