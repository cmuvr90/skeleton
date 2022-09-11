import {Page} from '../../components/Page';
import {Menu} from '../../components/Menu';

/**
 *
 * @param Template
 * @constructor
 */
export const MainLayout = Template => props => {
    return <Page>
        <Menu/>
        <Template {...props}/>
    </Page>
}