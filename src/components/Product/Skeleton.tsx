import React from "react"
import ContentLoader from "react-content-loader"
import s from '../../scss/components/Product.module.scss'

export const Skeleton = () => (
    <div className={s.skeletonBlock}>
        <div className={s.skeleton}>
            <ContentLoader
                speed={2}
                width={400}
                height={460}
                viewBox="0 0 400 460"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
            >
                <rect x="0" y="307" rx="2" ry="2" width="200" height="10"/>
                <rect x="0" y="283" rx="2" ry="2" width="200" height="10"/>
                <rect x="0" y="59" rx="10" ry="10" width="200" height="200"/>
                <rect x="0" y="356" rx="0" ry="0" width="200" height="10"/>
                <rect x="0" y="332" rx="0" ry="0" width="200" height="10"/>
            </ContentLoader>
        </div>
    </div>
)

