import { NavLink } from "@mantine/core";
import {
  IconGauge,
  IconFingerprint,
  IconCards,
  IconCashOff,
  IconLock,
  IconMoneybag,
  IconReport,
  TablerIconsProps,
} from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
type MenuItem = {
  label: string;
  icon?: any;
  links?: MenuItem[];
  link?: string;
  initiallyOpened?: boolean;
};
const menuData: MenuItem[] = [
  { label: "Dashboard", icon: IconGauge },
  {
    label: "Investments",
    icon: IconMoneybag,
    initiallyOpened: false,
    links: [
      { label: "Overview", link: "/button-component" },
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
      { label: "Overview", link: "/text-component" },
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

  { label: "Reports", icon: IconReport },
  {
    label: "Security",
    icon: IconLock,
  },
];
export function SideMenuBar() {
  const navigate = useNavigate();
  const getIconComponent = (icon: TablerIconsProps) => {
    switch (icon) {
      case IconGauge:
        return <IconGauge size="1rem" stroke={1.5} />;
      case IconMoneybag:
        return <IconMoneybag size="1rem" stroke={1.5} />;
      case IconLock:
        return <IconLock size="1rem" stroke={1.5} />;
      case IconReport:
        return <IconReport size="1rem" stroke={1.5} />;
      case IconCards:
        return <IconCards size="1rem" stroke={1.5} />;
      case IconCashOff:
        return <IconCashOff size="1rem" stroke={1.5} />;
      default:
        return null; // Return null or handle the case when the icon is not recognized
    }
  };

  const links = menuData.map((item) => (
    <NavLink
      label={item.label}
      leftSection={getIconComponent(item.icon)}
      childrenOffset={28}
    >
      {item.links &&
        item.links.map((submenu) => (
          <NavLink
            label={submenu.label}
            onClick={() => {
              navigate(submenu.link ?? "/");
            }}
          />
        ))}
    </NavLink>
  ));
  return (
    <>
      <div>{links}</div>

      {/* <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea> */}
    </>
  );
}
