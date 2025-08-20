export interface UserCardProps {
  username: string;
  id: string;
  role: string;
  onDelete?: () => void;
  onLogout?: () => void;
}
