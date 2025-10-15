export default function StatsSection() {
    return (
        <section>
            <div className="bg-gradient-to-r from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900 py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div>
                        <h2 className="text-4xl font-semibold lg:text-5xl">Corporate Training in Numbers</h2>
                        <p className="text-muted-foreground mt-4 text-balance text-lg">
                            Our corporate learning programs are designed to develop leadership, improve team performance,
                            and drive measurable growth across industries.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-2 gap-6 md:mt-16 md:grid-cols-4">
                        <div>
                            <div className="text-foreground text-4xl font-bold">250+</div>
                            <p className="text-muted-foreground">Organizations Trained</p>
                        </div>

                        <div>
                            <div className="text-foreground text-4xl font-bold">15k+</div>
                            <p className="text-muted-foreground">Professionals Empowered</p>
                        </div>

                        <div>
                            <div className="text-foreground text-4xl font-bold">100+</div>
                            <p className="text-muted-foreground">Custom Programs Delivered</p>
                        </div>

                        <div>
                            <div className="text-foreground text-4xl font-bold">98%</div>
                            <p className="text-muted-foreground">Client Satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
