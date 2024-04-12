import { CopyToClipboard } from "react-copy-to-clipboard";
import { Copy } from "lucide-react";

import styles from "@/component/CopySection/index.module.css";

const CopySection = (props) => {
  const { roomId } = props;

  return (
    <div className={styles.copyContainer}>
      <div className={styles.copyHeading}>Room ID</div>
      <hr />
      <div className={"flex gap-4 flex-row flex-wrap items-center justify-center w-full"}>
        <span className="">{roomId}</span>
        <CopyToClipboard text={roomId}>
          <Copy className="ml-3 cursor-pointer hover:cursor-pointer z-10" />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopySection;