import { IonButton } from '@ionic/react';
import { ComponentProps } from 'react';
import * as stylex from '@stylexjs/stylex';

type Props = {} & ComponentProps<"button">;

const BUTTON_STYLE = stylex.create({
	reset: {
		outline: 'none',
	},
});

const IsoBtn: React.FC<Props> = () => {
	return <IonButton>Ciao</IonButton>;
};

export default IsoBtn;
