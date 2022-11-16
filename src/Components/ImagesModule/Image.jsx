import { useState, useCallback, useEffect } from 'react';
import styles from './image.module.css';

const Image = ({ zoom, border, ...rest }) => {
	const escFunction = useCallback((event) => {
		if (event.key === 'Escape') {
			setClick(false);
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', escFunction, false);

		return () => {
			document.removeEventListener('keydown', escFunction, false);
		};
	}, []);

	const [click, setClick] = useState(false);
	const [hovered, setHovered] = useState(false);

	const setFlag = () => {
		setClick(true);
	};

	const unsetFlag = () => {
		setClick(false);
	};

	const onEnter = () => {
		setHovered(true);
	};
	const onExit = () => {
		setHovered(false);
	};

	if (!zoom) return <img {...rest} alt="alt" />;
	else
		return (
			<>
				{click ? (
					<div onClick={unsetFlag} className={`${styles.lightbox} ${styles.show} relative`}>
						<img alt="alt" {...rest} className={`${styles.show_image}`}></img>
						<div onClick={unsetFlag} className={`absolute right-4 -top-8 h-8 w-8`} />
					</div>
				) : (
					<div className="relative" onClick={setFlag} onMouseEnter={onEnter} onMouseLeave={onExit}>
						<img
							onClick={setFlag}
							alt="alt"
							{...rest}
							className={`relative ${
								border && 'rounded bg-gray-700 p-0.5 dark:bg-gray-800'
							} cursor-pointer`}
						></img>
						{hovered && <div alt="alt" onClick={setFlag} />}
					</div>
				)}
			</>
		);
};

export default Image;
