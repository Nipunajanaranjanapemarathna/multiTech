import React, { useState } from "react";
import {
  Home,
  User,
  Leaf,
  ShoppingBag,
  MessageSquare,
  Mail,
  Settings,
} from "lucide-react";

interface NavigationProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({
  onNavigate,
  activeSection,
}) => {
  const [isWheelMode, setIsWheelMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const navItems = [
    { id: "hero", icon: Home, label: "Home", color: "#B7FF8F" },
    { id: "about", icon: User, label: "About", color: "#EFC62D" },
    { id: "ingredients", icon: Leaf, label: "Ingredients", color: "#B7FF8F" },
    { id: "shop", icon: ShoppingBag, label: "Shop", color: "#EFC62D" },
    {
      id: "testimonials",
      icon: MessageSquare,
      label: "Reviews",
      color: "#B7FF8F",
    },
    { id: "contact", icon: Mail, label: "Contact", color: "#EFC62D" },
  ];

  const handleNavClick = (sectionId: string) => {
    // Smooth scroll animation
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    onNavigate(sectionId);
  };

  const getWheelPosition = (index: number, total: number) => {
    const angle = (index * 360) / total;
    const radius = 80;
    const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
    const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
    return { x, y, angle };
  };

  return (
    <>
      {/* Navigation Toggle */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsWheelMode(!isWheelMode)}
          className="w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-400 text-black rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/20"
        >
          <Settings
            className={`w-6 h-6 transition-transform duration-500 ${
              isWheelMode ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Traditional Right-Side Navigation */}
      {!isWheelMode && (
        <nav className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden sm:block">
          <div className="backdrop-blur-lg bg-black/30 rounded-3xl p-4 border border-white/10 shadow-2xl">
            <div className="space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <div
                    key={item.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`
                  relative w-14 h-14 rounded-2xl flex items-center justify-center
                  transition-all duration-500 transform
                  ${
                    isActive
                      ? "bg-gradient-to-r from-purple-400 to-blue-400 text-black scale-110 shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20 hover:scale-105"
                  }
                  ${isHovered ? "shadow-2xl" : ""}
                `}
                      style={{
                        boxShadow:
                          isActive || isHovered
                            ? `0 0 30px ${item.color}40, 0 0 60px ${item.color}20`
                            : "none",
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <Icon
                        className={`w-6 h-6 transition-all duration-300 ${
                          isActive ? "scale-110" : ""
                        }`}
                      />

                      {/* Ripple Effect */}
                      {isHovered && (
                        <div
                          className="absolute inset-0 rounded-2xl animate-ping opacity-30"
                          style={{ backgroundColor: item.color }}
                        />
                      )}
                    </button>

                    {/* Label Popup */}
                    <div
                      className={`
                  absolute right-16 top-1/2 transform -translate-y-1/2
                  px-4 py-2 bg-black/90 backdrop-blur-sm text-white text-sm font-medium
                  rounded-xl border border-white/20 whitespace-nowrap
                  transition-all duration-300 pointer-events-none
                  ${
                    isHovered
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-4"
                  }
                `}
                      style={{
                        boxShadow: `0 0 20px ${item.color}30`,
                      }}
                    >
                      {item.label}
                      <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-r-0 border-t-4 border-b-4 border-l-black/90 border-t-transparent border-b-transparent" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      {/* Wheel Navigation */}
      {isWheelMode && (
        <nav className="fixed right-20 top-1/2 transform -translate-y-1/2 z-40">
          <div className="relative w-40 h-40">
            {/* Center Hub */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-lime-400 to-yellow-400 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
              <div className="w-8 h-8 bg-black/20 rounded-full animate-pulse" />
            </div>

            {/* Navigation Items */}
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const position = getWheelPosition(index, navItems.length);
              const isActive = activeSection === item.id;
              const isHovered = hoveredItem === item.id;

              return (
                <div
                  key={item.id}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  style={{
                    transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
                    transition:
                      "all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                    animationDelay: `${index * 100}ms`,
                  }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`
                      relative w-12 h-12 rounded-full flex items-center justify-center
                      transition-all duration-500 transform
                      ${
                        isActive
                          ? "bg-gradient-to-r from-ble-400 to-purple-400 text-black scale-125 shadow-lg"
                          : "bg-black/50 backdrop-blur-sm text-white hover:bg-white/20 hover:scale-110"
                      }
                      ${isHovered ? "shadow-2xl" : ""}
                    `}
                    style={{
                      boxShadow:
                        isActive || isHovered
                          ? `0 0 30px ${item.color}60, 0 0 60px ${item.color}30`
                          : "none",
                      border: `2px solid ${
                        isActive ? "white" : "rgba(255,255,255,0.1)"
                      }`,
                    }}
                  >
                    <Icon
                      className={`w-5 h-5 transition-all duration-300 ${
                        isActive ? "scale-110" : ""
                      }`}
                    />

                    {/* Orbital Ring */}
                    {isHovered && (
                      <div
                        className="absolute inset-0 rounded-full border-2 animate-spin"
                        style={{
                          borderColor: `${item.color}80`,
                          borderTopColor: "transparent",
                          animationDuration: "2s",
                        }}
                      />
                    )}

                    {/* Pulse Effect */}
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-full animate-ping opacity-40"
                        style={{ backgroundColor: item.color }}
                      />
                    )}
                  </button>

                  {/* Floating Label */}
                  <div
                    className={`
                      absolute top-full mt-2 left-1/2 transform -translate-x-1/2
                      px-2 py-1 bg-black/90 backdrop-blur-sm text-white text-xs font-medium
                      rounded-lg border border-white/20 whitespace-nowrap
                      transition-all duration-300 pointer-events-none
                      ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-2"
                      }
                    `}
                    style={{
                      boxShadow: `0 0 15px ${item.color}40`,
                    }}
                  >
                    {item.label}
                  </div>
                </div>
              );
            })}

            {/* Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {navItems.map((_, index) => {
                const position = getWheelPosition(index, navItems.length);
                return (
                  <line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + (position.x / 160) * 100}%`}
                    y2={`${50 + (position.y / 160) * 100}%`}
                    stroke="rgba(183, 255, 143, 0.2)"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 200}ms` }}
                  />
                );
              })}
            </svg>
          </div>
        </nav>
      )}

      {/* Page Transition Overlay */}
      <div
        className={`
          fixed inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 backdrop-blur-sm
          transition-all duration-700 pointer-events-none z-30
          ${hoveredItem ? "opacity-100" : "opacity-0"}
        `}
      />
    </>
  );
};

export default Navigation;
