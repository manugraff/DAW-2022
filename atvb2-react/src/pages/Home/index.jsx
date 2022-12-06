import { SectionBanner } from '../../components/SectionBanner';
import { SectionCategorias } from '../../components/SectionCategorias';
import { SectionProducts } from '../../components/SectionProducts';
import { SectionValues } from '../../components/SectionValues';


export function HomePage() {
    return (
        <div id="home-page">
            <div className="container">
                <SectionBanner/>
                <SectionCategorias/>
                <SectionProducts/>
                <SectionValues/>
            </div>
        </div>
    )
}